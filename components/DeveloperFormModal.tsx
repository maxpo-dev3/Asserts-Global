// components/DeveloperFormModal.tsx
"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"
import toast from "react-hot-toast"

type DeveloperFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

interface FormValues {
  name: string
  email: string
  phone: string
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
})

export default function DeveloperFormModal({ isOpen, onClose }: DeveloperFormModalProps) {
  const initialValues: FormValues = { name: "", email: "", phone: "" }

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) throw new Error("Submission failed")

      toast.success("Form submitted successfully!")
      resetForm()
      onClose()
    } catch (err) {
      toast.error("Submission failed. Please try again.")
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-lg">
                <Dialog.Title className="text-xl font-bold mb-4">Developer Enquiry</Dialog.Title>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">Name</label>
                      <Field name="name" className="w-full border p-2 rounded" />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <Field name="email" type="email" className="w-full border p-2 rounded" />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Phone</label>
                      <Field name="phone" className="w-full border p-2 rounded" />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
