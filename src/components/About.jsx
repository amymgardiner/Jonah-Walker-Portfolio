import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from './Navbar'
import Footer from './Footer'
import JonahImage from '../assets/img/A2EA84D5-D09E-4382-8C79-A073A43644E1.jpg';

const About = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const [disabled, setDisabled] = useState(false);
    
      // Function that displays a success toast on bottom right of the page when form submission is successful
      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast',
        });
      };
    
      // Function called on submit that uses emailjs to send email of valid contact form
      const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
          // Disable form while processing submission
          setDisabled(true);
    
          // Define template params
          const templateParams = {
            name,
            email,
            subject,
            message,
          };
    
          // Use emailjs to email contact form data
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY
          );
    
          // Reset contact form fields after submission
          reset();
          // Display success toast
          toastifySuccess();
          // Re-enable form submission
          setDisabled(false);
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div>
            <Navbar/>
            <section className="overflow-hidden main--body">
                <div className="container flex flex-row main--body_about">
                    <img src={JonahImage} className="max-w-[38.5rem] h-full p-8 main--body_about-image" alt="Jonah Walker with camera"/>
                    <div className="flex flex-col">
                        <div className="p-8 main--body_about-text">
                            <h2 className="mb-2 text-2xl font-semibold">Lorem ipsum dolor</h2>
                            <p className="text-base">Suspendisse sit amet dignissim ligula. Praesent eu posuere massa. Aenean nec pulvinar ex. Mauris volutpat sit amet tellus a vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum finibus nunc sit amet ex rutrum placerat.</p>
                        </div>
                        <div className="p-8 main--body_about-contact">
                            <h1 className="mb-2 text-xl text-[#90e0ef]">Contact Me</h1>
                            <div className="about--contact_div">
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col">
                            <label htmlFor="name">Full Name:</label>
                                <input
                                type="text"
                                name="name"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your name',
                                }   ,
                                    maxLength: {
                                        value: 80,
                                        message: 'Please use 30 characters or less',
                                    },
                                })}
                                placeholder="Name"
                                className="max-w-[50%] text-[#212529] p-2 rounded-lg text-base"
                                ></input>
                                {errors.name && (
                                    <span className="errorMessage text-[#BFC0C0] text-base">{errors.name.message}</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="email">Email Address:</label>
                                <input
                                type="email"
                                name="email"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                })}
                                placeholder="Email address"
                                className="max-w-[50%] text-[#212529] p-2 rounded-lg text-base"
                                ></input>
                                {errors.email && (
                                    <span className="errorMessage text-[#BFC0C0] text-base">
                                    Please enter a valid email address
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="name">Subject Line:</label>
                                <input
                                type="text"
                                name="subject"
                                {...register('subject', {
                                    required: {
                                        value: true,
                                        message: 'Please enter a subject',
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'Subject cannot exceed 75 characters',
                                    },
                                })}
                                placeholder="Subject"
                                className="max-w-[50%] text-[#212529] p-2 rounded-lg text-base"
                                ></input>
                                {errors.subject && (
                                    <span className="errorMessage text-[#BFC0C0] text-base">{errors.subject.message}</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="message">Message:</label>
                                <textarea
                                rows="5"
                                name="message"
                                {...register('message', {
                                    required: true,
                                })}
                                placeholder="Message"
                                className="max-w-[50%] text-[#212529] p-2 rounded-lg"
                                ></textarea>
                                {errors.message && (
                                    <span className="errorMessage text-[#BFC0C0] text-base">Please enter a message</span>
                                )}
                            </div>
                            <button
                            data-testid="button"
                            className="bg-[#393D3F] rounded-xl px-4 py-3 about--contact_button"
                            disabled={disabled}
                            type="submit"
                            >
                            Submit
                            </button>
                            </form>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About