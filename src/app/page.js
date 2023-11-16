"use client";
import Colorcard from "../../components/Colorcard/colorcard";
import Landing from "../../components/Landing/page";
import {Shadow} from "../../components/Utils/utils";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import {colorcard} from "../../components/sidenav";
import {useDispatch, useSelector} from "react-redux";
import Common from "../../components/common/Common";
export default function Home() {
  const whatToShow = useSelector((state) => state.operator.whatToShow);
  const dispatch = useDispatch();
  return (
    <div>
      <Common />
    </div>
  );
}
