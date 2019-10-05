import React from "react"
import pic from "../../static/images/justin.jpg"

export const Header = props => (
  <div className="flex justify-between items-center bg-gray-800 text-gray-200 h-16">
    <div>
      <img
        // src="../images/justin.jpg"
        src={pic}
        className="h-24 rounded-full absolute ml-4"
        alt="Justin Rassier"
      />
      <h1 className="text-2xl font-semibold tracking-wide inline-block ml-32">
        Justin Rassier
      </h1>
    </div>
    <div className="">
      <ul className="flex mr-4">
        <li className="px-2">
          <a href="#">About</a>
        </li>
        <li className="px-2">
          <a href="#">Blog</a>
        </li>
        <li className="px-2">
          <a href="#">Talks</a>
        </li>
      </ul>
    </div>
  </div>
)
