import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '../../ui/Modal';



export default function List({title,data,isLoading}) {
    const listRef = useRef(null)

    const [itemList, setItemList] = useState(null)

    const [showModal, setShowModal] = useState(false)

    const [newItemName, setNewItemName] = useState("")
    const [newItemImage, setNewItemImage] = useState("")

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleNext = () => {
        if(listRef!==null){
            listRef.current.slickNext()
        }
    }
    const handlePrev = () => {
        if(listRef!==null){
            listRef.current.slickPrev()
        }
    }

    const handleOpenModal = () => {
        if(showModal) setShowModal(false)
        else setShowModal(true)
    }
    const handleAddNewItem = () => {
        if(newItemName.trim()!=="" && newItemImage.trim()!==""){
            setItemList(prev=>{
                if(prev===null){
                    return [
                        { Name: newItemName, ImageUrl: newItemImage },
                        ...data,
                    ];
                }else {
                    [{ Name: newItemName, ImageUrl: newItemImage }, ...prev];
                }
            })
            setShowModal(false)
            setNewItemImage("")
            setNewItemName("")
        }
    }
    const handleSelectImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = (e) => {
            setNewItemImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    if (isLoading) {
        return (
            <div>
                <div className="flex justify-between items-center py-3">
                    <h1 className='text-xl font-semibold text-slate-600'>{title}</h1>
                    <div className='h-[30px] w-[100px] bg-slate-200 animate-pulse'></div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="h-[250px] w-full bg-slate-200 rounded-xl shadow-md animate-pulse"></div>
                    <div className="h-[250px] w-full bg-slate-200 rounded-xl shadow-md animate-pulse"></div>
                    <div className="h-[250px] w-full bg-slate-200 rounded-xl shadow-md animate-pulse"></div>
                    <div className="h-[250px] w-full bg-slate-200 rounded-xl shadow-md animate-pulse"></div>
                    <div className="h-[250px] w-full bg-slate-200 rounded-xl shadow-md animate-pulse"></div>
                </div>
            </div>
        );
    }
  return (
      <div>
          <Modal
              show={showModal}
              title="Add New Item"
              onHide={handleOpenModal}
              onAction={handleAddNewItem}
          >
              <form className="m-3">
                  <div>
                      <label className="text-slate-600 text-xl">
                          Enter Item Name
                      </label>
                      <input
                          type="text"
                          value={newItemName}
                          onChange={e=>setNewItemName(e.target.value)}
                          placeholder="Enter Item Name"
                          className="w-full px-3 py-2 bg-slate-100 border-none mt-3 outline-none transition-[0.33s] focus:outline-secondary/20"
                      />
                  </div>
                  <div className="mt-3">
                      <label className="text-slate-600 text-xl">
                          Select Item Image
                      </label>
                      <input
                          type="file"
                          onChange={handleSelectImage}
                          value={""}
                          placeholder="Enter Item Name"
                          className="w-full px-3 py-2 bg-slate-100 border-none mt-3 outline-none transition-[0.33s] focus:outline-secondary/20"
                      />
                  </div>
              </form>
              <div>
                  {newItemImage !== "" && (
                      <img src={newItemImage} className="w-[150px]" />
                  )}
              </div>
          </Modal>
          <div className="flex justify-between items-center">
              <h1 className='text-xl font-semibold text-slate-600'>{title}</h1>
              <div className="flex items-center justify-center gap-x-3">
                  <button
                      className="text-secondary font-semibold"
                      onClick={handleOpenModal}
                  >
                      AddMore
                  </button>
                  <div>
                      <button onClick={handlePrev} className="text-slate-500">
                          <IoIosArrowBack size={20} />
                      </button>
                      <button
                          onClick={handleNext}
                          className="text-slate-500 ms-2"
                      >
                          <IoIosArrowForward size={20} />
                      </button>
                  </div>
              </div>
          </div>
          <div className="mt-3 -mx-2">
              <Slider {...settings} ref={listRef}>
                  {itemList!==null?itemList.map((item, i) => (
                      <ListItem key={i} name={item.Name} image={item.ImageUrl} />
                  )):data.map((item, i) => (
                      <ListItem key={i} name={item.Name} image={item.ImageUrl} />
                  ))}
              </Slider>
          </div>
      </div>
  );
}

const ListItem = ({name,image}) => {
    return <div className="p-2">
        <img
            src={image}
            className="h-[220px] object-cover w-full rounded-xl shadow-md sm:h-[250px]"
        />
        <p className="text-center my-2 text-slate-500 font-semibold">
            {name}
        </p>
    </div>
}
