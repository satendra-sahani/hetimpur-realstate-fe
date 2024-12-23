"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLandDataAction,
  generatePaymentLinkAction,
  getLandDataAction,
  saveLandDataAction,
  updateLandDataAction,
  uploadSingleImageAction,
} from "@/service/action/common";
import { RootState, LandTypes } from "@/types/types";
import { Country, State, City, IState, ICity } from 'country-state-city';

// Main component remains the same until LandForm
export default function LandManagement() {
  const { user } = useSelector((state: RootState) => state.authenticationReducer);
  const { lands } = useSelector((state: RootState) => state.commonReducer);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [editingLand, setEditingLand] = useState<LandTypes | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getLandDataAction({ userType: user?.role?.toLocaleLowerCase() }));
    }
  }, [dispatch, user]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(file.type)) {
        alert("Invalid file type. Please upload a valid image.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      dispatch(
        uploadSingleImageAction({
          data: formData,
          cb: (res: { url: string }) => {
            setImageUrl(res.url);
            alert("Image uploaded successfully.");
          },
          errorCB: () => alert("Image upload failed. Please try again."),
        })
      );
    } else {
      alert("No file selected. Please choose an image.");
    }
  };

  const handleAddLand = (newLand: Omit<LandTypes, "_id">) => {
    const landToSave = {
      ...newLand,
      image: imageUrl || newLand.image,
      client: user?._id || "",
    };

    dispatch(
      saveLandDataAction({
        data: landToSave,
        userType: user?.role,
        cb: () => {
          alert("New land added successfully.");
          setIsAddModalOpen(false);
          dispatch(getLandDataAction({ userType: user?.role?.toLocaleLowerCase() }));
        },
      })
    );
  };

  const handleEditLand = (updatedLand: Omit<LandTypes, "_id">) => {
    if (editingLand) {
      dispatch(
        updateLandDataAction({
          data: { ...updatedLand, image: imageUrl || editingLand.image },
          id: editingLand._id,
          userType: user?.role,
          cb: () => {
            alert("Land updated successfully.");
            setEditingLand(null);
            setIsEditModalOpen(false);
            dispatch(getLandDataAction({ userType: user?.role?.toLocaleLowerCase() }));
          },
        })
      );
    }
  };

  const handleDeleteLand = (id: string) => {
    dispatch(
      deleteLandDataAction({
        id,
        userType: user?.role,
        cb: () => {
          alert("Land deleted successfully.");
          dispatch(getLandDataAction({ userType: user?.role?.toLocaleLowerCase() }));
        },
      })
    );
  };

  const payNow = ({ landId }: any) => {
    dispatch(
      generatePaymentLinkAction({
        data: { userType: "client", landId },
        cb: (res: { paymentLink: string }) => {
          if (typeof res.paymentLink === "string") {
            window.location.href = res.paymentLink;
          } else {
            alert("Failed to generate payment link.");
          }
        },
        hideError: true,
      })
    );
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Land Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add New Land
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <LandForm
                    onSubmit={handleAddLand}
                    onCancel={() => setIsAddModalOpen(false)}
                    handleImage={handleImage}
                  />
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lands?.map((land) => (
                  <TableRow key={land._id}>
                    <TableCell>
                      <img
                        src={typeof land.image === "string" ? land.image : "https://via.placeholder.com/150"}
                        alt={`Land ${land.number}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell>{land.state}</TableCell>
                    <TableCell>{land.city}</TableCell>
                    <TableCell>{land.number}</TableCell>
                    <TableCell>₹{land.price}</TableCell>
                    <TableCell>
                      <span
                        onClick={() => payNow({ landId: land._id })}
                        className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                          land.paymentStatus ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {land.paymentStatus ? "Publish" : "Pending"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingLand(land);
                                setIsEditModalOpen(true);
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <LandForm
                              land={editingLand}
                              onSubmit={handleEditLand}
                              onCancel={() => {
                                setEditingLand(null);
                                setIsEditModalOpen(false);
                              }}
                              handleImage={handleImage}
                            />
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteLand(land._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

interface LandFormProps {
  land?: LandTypes | null;
  onSubmit: (land: Omit<LandTypes, "_id">) => void;
  onCancel: () => void;
  handleImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LandForm({ land, onSubmit, onCancel, handleImage }: LandFormProps) {
  const [formData, setFormData] = useState<Omit<LandTypes, "_id">>(
    land || {
      client: "",
      image: "",
      state: "",
      city: "",
      number: "",
      price: "",
      status: "available",
      paymentStatus: false,
    }
  );
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedStateCode, setSelectedStateCode] = useState<string>("");

  useEffect(() => {
    // Get all states of India (country code: IN)
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);

    // If editing, find the state code for the existing state
    if (land?.state) {
      const stateObj = indianStates.find(s => s.name === land.state);
      if (stateObj) {
        setSelectedStateCode(stateObj.isoCode);
      }
    }
  }, [land?.state]);

  useEffect(() => {
    // Update cities when state changes
    if (selectedStateCode) {
      const citiesOfState = City.getCitiesOfState("IN", selectedStateCode);
      setCities(citiesOfState);
    } else {
      setCities([]);
    }
  }, [selectedStateCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      handleImage(e as ChangeEvent<HTMLInputElement>);
    } else if (name === 'state') {
      const selectedState = states.find(s => s.name === value);
      if (selectedState) {
        setSelectedStateCode(selectedState.isoCode);
        setFormData(prev => ({
          ...prev,
          state: value,
          city: '', // Reset city when state changes
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value as "available" | "sold",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <DialogHeader>
        <DialogTitle>{land ? "Edit Land" : "Add New Land"}</DialogTitle>
        <DialogDescription>
          {land ? "Make changes to the land details here." : "Enter the details for the new land listing."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" name="image" type="file" onChange={handleImage} accept="image/*" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-background"
            required
            disabled={!selectedStateCode}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="number">Number</Label>
          <Input id="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" value={formData.price} onChange={handleChange} type="number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select name="status" value={formData.status} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {land ? "Update Land" : "Add Land"}
        </Button>
      </DialogFooter>
    </form>
  );
}

