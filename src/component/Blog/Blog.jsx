import React from "react";
import "./Blog.css";
import { GoCalendar } from "react-icons/go";
import { BsFillCircleFill } from "react-icons/bs"
import data from "./example_data.json";

function PlaceList() {
  return (
    <div className="placelist">
      {data.map((item) => {
        return (
          <div className="placelist-container" key={item.id}>
            <div className="placelist-blog">
              <div className="placelist-header">
                <img src={item.profile_image_url} alt="" />

                <div className="placelist-title">
                  <h3>{item.name}</h3>
                  <div className="placelist-rate">
                    <p>
                      <GoCalendar />

                      {`${item.operation_time[0].time_open} AM - ${item.operation_time[0].time_close}`}
                    </p>
                    <span><BsFillCircleFill size={10} />{item.rating}</span>
                  </div>
                </div>
              </div>

              <div className="placelist-img">
                <div className="placelist-img-list">
                  {item.images.map((img) => {
                    return <img src={img} alt="" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="placelist-container">
        <div className="placelist-blog">
          <div className="placelist-header">
            <img
              src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              alt=""
            />
            <div className="placelist-title">
              <h3>Cantina Wine Bar & Italian Kitchen</h3>
              <div className="placelist-rate">
                <p>
                  <GoCalendar />
                  10.00 AM - 6.00PM
                </p>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <div className="placelist-img">
            <div className="placelist-img-list">
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PlaceList;