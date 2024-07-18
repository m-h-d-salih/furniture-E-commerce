import React, { useContext, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MyContext } from '../../../context/cartContext';

const validationSchema = Yup.object({
  urlimg: Yup.string().url('Invalid URL').required('Required'),
  title: Yup.string().required('Required'),
  price: Yup.number().positive('Price must be positive').required('Required'),
  category: Yup.string().required('Required'),
  quantity: Yup.number().min(1, 'Quantity must be at least 1').required('Required'),
  description: Yup.string().required('Required'),
});

function ProductEditModal({ onClose,product }) {
  const {products,setProducts}=useContext(MyContext);
//   const [isModalOpen, setModalOpen] = useState(false);   

  const initialValues = {
    urlimg: product.urlimg,
    title: product.title,
    price: product.price,
    category: product.category,
    quantity: product.quantity,
    description: product.description,
  };
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
        <div className="relative bg-white p-8 rounded shadow-lg max-w-md w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl mb-4">Product Details</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
             
              setSubmitting(false);
              onClose();
            }
        
        }
          >
            {({ isSubmitting, handleChange, handleBlur }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="urlimg" className="block text-gray-700">Image URL</label>
                  <input
                    type="text"
                    name="urlimg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.urlimg}
                  />
                  <ErrorMessage name="urlimg" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.title}
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.price}
                  />
                  <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700">Category</label>
                  <input
                    type="text"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.category}
                  />
                  <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.quantity}
                  />
                  <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700">Description</label>
                  <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                    value={initialValues.description}
                  />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="mr-4 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ProductEditModal;
