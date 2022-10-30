import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailContactForm = () => {
  const form = useRef();
  //const service = process.env.EMAILJS_SERVICE_KEY;
  //const template = process.env.EMAILJS_PUBLIC_KEY;
  //const apikey = process.env.EMAILJS_TEMPLATE;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iu320z4',
        'kolefnisskogar_template',
        form.current,
        '6dW3H3zWSNkcCAAD4'
      )
      .then(
        (result) => {
          alert('Your message has been sent');
        },
        (error) => {
          // show the user an error
        }
      );
  };

  /* 
  The acount with these credentials has been disconnected
    .sendForm(
        'service_iu320z4',
        'kolefnisskogar_template',
        form.current,
        '6dW3H3zWSNkcCAAD4'
      )
  */

  //console.log(service, template, apikey);

  return (
    <div className='flex flex-col justify-start items-center my-12'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 my-6'>
        <form ref={form} onSubmit={sendEmail}>
          <label className='text-sm font-medium text-gray-900 block mb-2'>
            Nafn
          </label>
          <input
            className='mb-4 bg-orange-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5'
            type='text'
            name='user_name'
          />
          <label className='text-sm font-medium text-gray-900 block mb-2'>
            Netfang
          </label>
          <input
            className='mb-4 bg-orange-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5'
            type='email'
            name='user_email'
          />
          <label className='text-sm font-medium text-gray-900 block mb-2'>
            Skilaboð
          </label>
          <textarea
            className='mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5'
            name='message'
            rows='10'
          />
          <input
            className='mt-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center w-full hover:cursor-pointer'
            type='submit'
            value='Senda'
          />
        </form>
      </div>
    </div>
  );
};

export default EmailContactForm;
