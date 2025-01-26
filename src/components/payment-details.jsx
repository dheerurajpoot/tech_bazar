"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export function PaymentDetailsDialog({ existingDetails, onSave }) {
	const [details, setDetails] = useState(
		existingDetails || {
			bankName: "",
			accountNumber: "",
			ifscCode: "",
			upiId: "",
		}
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetails((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(details);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>
					{existingDetails
						? "Edit Payment Details"
						: "Add Payment Details"}
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>
						{existingDetails
							? "Edit Payment Details"
							: "Add Payment Details"}
					</DialogTitle>
					<DialogDescription>
						Enter your bank details and UPI ID here. Click save when
						you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='bankName' className='text-right'>
								Bank Name
							</Label>
							<Input
								id='bankName'
								name='bankName'
								value={details?.bankName}
								onChange={handleChange}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label
								htmlFor='accountNumber'
								className='text-right'>
								Account Number
							</Label>
							<Input
								id='accountNumber'
								name='accountNumber'
								value={details.accountNumber}
								onChange={handleChange}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='ifscCode' className='text-right'>
								IFSC Code
							</Label>
							<Input
								id='ifscCode'
								name='ifscCode'
								value={details.ifscCode}
								onChange={handleChange}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='upiId' className='text-right'>
								UPI ID/NO.
							</Label>
							<Input
								id='upiId'
								name='upiId'
								value={details.upiId}
								onChange={handleChange}
								className='col-span-3'
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type='submit'>Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
