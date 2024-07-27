import React, { useContext,  useEffect,  useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MyContext } from '../../../context/cartContext';
import toast, { Toaster } from "react-hot-toast";


const validationSchema = Yup.object({
  urlimg: Yup.string().url('Invalid URL').required('Required'),
  title: Yup.string().required('Required'),
  price: Yup.number().positive('Price must be positive').required('Required'),
  category: Yup.string().required('Required'),
  quantity: Yup.number().min(1, 'Quantity must be at least 1').required('Required'),
  description: Yup.string().required('Required'),
});

function ProductEditModal({ onClose, product }) {
  const { products, setProducts } = useContext(MyContext);
  const [productData, setProductData] = useState(null);
  const id = product.id;
  useEffect(()=>{
    axios
    .get(`http://localhost:8000/products/${id}`)
    .then((response) => {
      setProductData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
  },[id])
  // console.log(id);

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
      <Toaster />;
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
              const updated = Object.keys(values).some(
                (key) => values[key] !== productData[key]
              );
              if (updated) {
                axios
                  .put(`http://localhost:8000/products/${id}`, values)
                  .then((response) => {
                    console.log("Product updated successfully:", response.data);
                    toast.success("Product updated successfully");
                        
                   
                  })
                  .catch((error) => {
                    console.error("Error updating product:", error);
                    toast.error("Failed updating product");
                  })
                  .finally(() => {
                    setSubmitting(false);
                    onClose();
                  });
              } else {
                toast.info("No changes applied");
                setSubmitting(false);
                onClose();
              }
              
              
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="urlimg" className="block text-gray-700">Image URL</label>
                  <Field
                    type="text"
                    name="urlimg"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                  />
                  <ErrorMessage name="urlimg" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700">Title</label>
                  <Field
                    type="text"
                    name="title"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700">Price</label>
                  <Field
                    type="number"
                    name="price"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                  />
                  <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700">Category</label>
                  <Field
                    type="text"
                    name="category"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                  />
                  <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                  <Field
                    type="number"
                    name="quantity"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
                  />
                  <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700">Description</label>
                  <Field
                    type="text"
                    name="description"
                    className="mt-1 p-2 border border-gray-400 rounded w-full"
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
                    Edit
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
