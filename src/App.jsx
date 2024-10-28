import React from "react";
import img from "./assets/bratia.jpg"
function App() {
  return (
    <div className="flex max-w-[1200px]  mx-auto justify-between items-center h-[100vh] text-[#040404be]">
      <div className="w-[50%] relative h-full  flex justify-center items-center">
        <img className="max-h-[500px]" src={img} alt="" />
       </div>
      <div className="w-[50%] h-full flex justify-center">

      <div className=" flex flex-col justify-center  w-[367px]" >
        <p className="text-[18px] font-[500] text-center">Welcome Back!</p>
        <label htmlFor="" className="flex flex-col text-[16px] font-[600] mt-7">
          Username:
          <input type="gmail" className="h-[34px] drop-shadow-md text-[#f4b907c8] pl-3 mt-2 rounded-[30px] border-[#e49e04] border-[1px]" />
        </label>
        <label htmlFor="" className="flex flex-col text-[16px] font-[600] mt-3">
          Password:
          <input type="password" className="h-[34px] drop-shadow-md pl-3 text-[#f4b907c8]  mt-2 rounded-[30px] border-[#e49e04] border-[1px]" />
        </label>
        <button className="h-[37px] drop-shadow-md border-[#f79a03] hover:bg-[#f79a03c3] border-[1px] rounded-[50px] mt-10 bg-[#fca016] text-[#fff] text-[16px]">Login</button>
        <p className="text-center mt-10">Dont have and account? Register</p>
        <div className="flex justify-center gap-2 mt-4">
          <button className="p-1 button-1 rounded-[50px] drop-shadow-md">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
                fill="#f79a03"
              />
            </svg>
          </button>
          <button className="p-1 button-1 rounded-[50px] drop-shadow-md">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM18.0566 8.2959L16.0693 17.6611C15.9229 18.3252 15.5273 18.4863 14.9756 18.1738L11.9482 15.9424L10.4883 17.3486C10.3271 17.5098 10.1904 17.6465 9.87793 17.6465L10.0928 14.5654L15.7031 9.49707C15.9473 9.28223 15.6494 9.16016 15.3271 9.375L8.39355 13.7402L5.40527 12.8076C4.75586 12.6025 4.74121 12.1582 5.54199 11.8457L17.2168 7.34375C17.7588 7.14844 18.2324 7.47559 18.0566 8.2959Z"
                fill="#f79a03"
              />
            </svg>
          </button>
          <button className="p-1 button-1 rounded-[50px] drop-shadow-md">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5986 3.17871C16.5527 1.12793 13.8281 0 10.9326 0C4.95605 0 0.0927734 4.86328 0.0927734 10.8398C0.0927734 12.749 0.59082 14.6143 1.53809 16.2598L0 21.875L5.74707 20.3662C7.3291 21.2305 9.11133 21.6846 10.9277 21.6846H10.9326C16.9043 21.6846 21.875 16.8213 21.875 10.8447C21.875 7.94922 20.6445 5.22949 18.5986 3.17871ZM10.9326 19.8584C9.31152 19.8584 7.72461 19.4238 6.34277 18.6035L6.01562 18.4082L2.60742 19.3018L3.51562 15.9766L3.30078 15.6348C2.39746 14.1992 1.92383 12.5439 1.92383 10.8398C1.92383 5.87402 5.9668 1.83105 10.9375 1.83105C13.3447 1.83105 15.6055 2.76855 17.3047 4.47266C19.0039 6.17676 20.0488 8.4375 20.0439 10.8447C20.0439 15.8154 15.8984 19.8584 10.9326 19.8584ZM15.874 13.1104C15.6055 12.9736 14.2725 12.3193 14.0234 12.2314C13.7744 12.1387 13.5938 12.0947 13.4131 12.3682C13.2324 12.6416 12.7148 13.2471 12.5537 13.4326C12.3975 13.6133 12.2363 13.6377 11.9678 13.501C10.376 12.7051 9.33105 12.0801 8.28125 10.2783C8.00293 9.7998 8.55957 9.83398 9.07715 8.79883C9.16504 8.61816 9.12109 8.46191 9.05273 8.3252C8.98438 8.18848 8.44238 6.85547 8.21777 6.31348C7.99805 5.78613 7.77344 5.85938 7.60742 5.84961C7.45117 5.83984 7.27051 5.83984 7.08984 5.83984C6.90918 5.83984 6.61621 5.9082 6.36719 6.17676C6.11816 6.4502 5.41992 7.10449 5.41992 8.4375C5.41992 9.77051 6.3916 11.0596 6.52344 11.2402C6.66016 11.4209 8.43262 14.1553 11.1523 15.332C12.8711 16.0742 13.5449 16.1377 14.4043 16.0107C14.9268 15.9326 16.0059 15.3564 16.2305 14.7217C16.4551 14.0869 16.4551 13.5449 16.3867 13.4326C16.3232 13.3105 16.1426 13.2422 15.874 13.1104Z"
                fill="#f79a03"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
       
        <p style={{
    WebkitBoxShadow: "-14px 0px 26px -5px rgba(34, 60, 80, 0.6) inset",
    MozBoxShadow: "-14px 0px 26px -5px rgba(34, 60, 80, 0.6) inset",
    boxShadow: "-14px 0px 26px -5px rgba(34, 60, 80, 0.6) inset"
  }} className="bg-[#f79a03] border-r-[50px] border-[#febf5a] rounded-r-[50%] absolute bottom-0 top-0 right-0 z-[-1] w-[50%] left-[0px] drop-shadow-lg"></p>
    </div>
  );
}

export default App;
