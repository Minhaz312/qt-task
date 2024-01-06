import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
      <div className="bg-primary">
          <div className="mx-auto w-full xl:w-10/12 2xl:w-9/12 py-10 grid grid-cols-12">
              <div className="col-span-12 md:col-span-9 p-5 mb-5 md:px-24 flex flex-col justify-between">
                  <div className="flex justify-between w-full items-center bg-white mb-10 sm:mb-20 ps-3 pe-2 py-2 shadow-lg rounded-md sm:rounded-2xl">
                      <input
                          type="text"
                          placeholder="Enter your mail"
                          className="border-0 outline-none bg-transparent w-full text-sm sm:text-base"
                      />
                      <button className="flex justify-center items-center text-secondary font-semibold text-sm sm:bg-secondary sm:text-white px-3 sm:px-8 py-1.5 rounded-xl gap-x-1 sm:text-lg">
                          <span>Subscribe</span>
                          <IoIosArrowRoundForward
                              size={25}
                              className="sm:fill-white"
                          />
                      </button>
                  </div>
                  <div className="flex justify-between flex-col-reverse items-center md:flex-row md:items-end">
                      <div>
                        <img src='/logo.png' className='h-[50px] sm:h-[60px] mx-auto md:mx-0' />
                        <p className='font-bold text-sm mt-5 sm:mt-0 md:text-base'>Copyright&copy;Tripp. All Right Reserved</p>
                      </div>
                      <div className='flex gap-x-2 my-6 sm:my-0'>
                          <a href="https://google.com">
                              <button className="bg-secondary sm:bg-red-200 p-3 rounded-full">
                                  <FaGoogle
                                      size={20}
                                      className="fill-white sm:fill-secondary"
                                  />
                              </button>
                          </a>
                          <a href="https://twitter.com">
                              <button className="bg-secondary sm:bg-red-200 p-3 rounded-full">
                                  <FaTwitter
                                      size={20}
                                      className="fill-white sm:fill-secondary"
                                  />
                              </button>
                          </a>
                          <a href="https://instagram.com">
                              <button className="bg-secondary sm:bg-red-200 p-3 rounded-full">
                                  <FaInstagram
                                      size={20}
                                      className="fill-white sm:fill-secondary"
                                  />
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-span-4 hidden justify-center items-start md:col-span-3 md:flex">
                  <img
                      src="/images/footer-image.png"
                      className="w-full h-auto"
                  />
              </div>
          </div>
      </div>
  );
}
