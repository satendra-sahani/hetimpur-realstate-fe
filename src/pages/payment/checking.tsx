import { LoadingState } from '@/components/ui/loading-state';
import { getUserAction } from '@/service/action/authentication';
import { verifyPaymentAction } from '@/service/action/common';
import { RootState } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface PaymentType {
  razorpay_payment_id: string;
  razorpay_payment_link_id: string;
  razorpay_payment_link_reference_id: string;
  razorpay_payment_link_status: string;
  razorpay_signature: string;
  landId?: any; // Made optional
}

const PaymentLoading: React.FC = () => {
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState<PaymentType | null>(null);
  const { user } = useSelector((state: RootState) => state.authenticationReducer);
  const dispatch = useDispatch();

  // Extract and validate payment details from query parameters
  useEffect(() => {
    if (!router.isReady || !router.query) return;

    const paymentData: Partial<PaymentType> = {
      landId: router.query.landId as string, // Optional
      razorpay_payment_id: router.query.razorpay_payment_id as string,
      razorpay_payment_link_id: router.query.razorpay_payment_link_id as string,
      razorpay_payment_link_reference_id: router.query.razorpay_payment_link_reference_id as string,
      razorpay_payment_link_status: router.query.razorpay_payment_link_status as string,
      razorpay_signature: router.query.razorpay_signature as string,
    };

    // Validate required fields, making landId optional
    const requiredFields = [
      paymentData.razorpay_payment_id,
      paymentData.razorpay_payment_link_id,
      paymentData.razorpay_payment_link_reference_id,
      paymentData.razorpay_payment_link_status,
      paymentData.razorpay_signature,
    ];

    const isValid = requiredFields.every((value) => value !== undefined);

    if (isValid) {
      setPaymentDetails(paymentData as PaymentType);
    } else {
      console.error('Invalid or incomplete payment details:', router.query);
    }
  }, [router.isReady, router.query]);

  // Perform user-specific checks or actions when payment details are available
  useEffect(() => {
    if (user?._id && paymentDetails) {
      dispatch(
        verifyPaymentAction({
          data: paymentDetails,
          cb: () => router.push('/payment/success'),
          errorCB: () => {
            router.push('/payment/failed');
          },
        })
      );
    }
  }, [user, paymentDetails]);

  // Fetch user information
  useEffect(() => {
    dispatch(getUserAction({ hideMessage: true }));
  }, [dispatch]);

  return <LoadingState />;
};

export default PaymentLoading;
