"use client";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import ContactlessIcon from "@mui/icons-material/Contactless";
import image from "../../images/pec-logo.png";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Blinker } from "next/font/google";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const blinker = Blinker({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

interface Params {
  params: { user: string };
}

const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

export default function User({ params }: Params) {
  const [open,setopen] = useState(false);
  const { push } = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2010 },
    (_, index) => 2011 + index
  );

  // Year Selection

  const [selectedYear, setSelectedYear] = useState("");
  const YearTextField = () => {
    return (
      <TextField
        className="bg-white w-1/3 h-fit justify-between rounded-md"
        label="Year"
        select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  const currencies = [
    {
      value: "jan",
      label: "January",
    },
    {
      value: "feb",
      label: "February",
    },
    {
      value: "mar",
      label: "March",
    },
    {
      value: "apr",
      label: "April",
    },
    {
      value: "may",
      label: "May",
    },
    {
      value: "jun",
      label: "June",
    },
    {
      value: "jul",
      label: "July",
    },
    {
      value: "aug",
      label: "August",
    },
    {
      value: "sep",
      label: "September",
    },
    {
      value: "oct",
      label: "October",
    },
    {
      value: "nov",
      label: "November",
    },
    {
      value: "dec",
      label: "December",
    },
  ];

  const [month, setmonth] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [type, setType] = useState<any>("");

  let timebar = () => {
    let progressTimeout: any;
    let dismissTimeout: any;
    const startDismissTimer = () => {
      dismissTimeout = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    };
    startDismissTimer();
    return () => {
      clearInterval(progressTimeout);
      clearTimeout(dismissTimeout);
    };
  };

  //Pdf generation
  let generatePDF = async () => {
    setopen(true);
    const eid = sessionStorage.getItem("eid");
    if (month && selectedYear) {
      try {
        const res = await api.get("staff/receipt/" + eid + "/", {
          params: {
            month: month,
            year: selectedYear,
          },
        });
        sessionStorage.setItem(
          "data",
          JSON.stringify({
            month: month,
            year: selectedYear,
            data: res.data,
          })
        );
        push(`/payslip/${params.user}?month=${month}&year=${selectedYear}`);
      } catch (e: any) {
        setopen(false);
        setAlertContent(e.response.data.detail);
        setType("error");
        setOpenAlert(true);
        timebar();
        
      }

      // setAlertContent("Payslip");
      // setType("success");
      // setOpenAlert(true);
      // timebar();
      // console.log("if");
    } else {
      setopen(false);
      setAlertContent("Field cannot be empty!!");
      setType("error");
      setOpenAlert(true);
      timebar();
      // console.log("else");
    }
  };

  return (
    <div className="bg-cover bg-center bg-white ">
      <Navbar params={params} />
      <div className=" bg-blue-950 fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around   h-1/3 w-[40%] rounded-md text-center px-4 py-2  ">
        <p className="text-white text-[25px] ">Select Pay Slip Year & Month</p>
        <div className="flex-row w-[80%] flex items-center justify-around py-[10px]">
          <TextField
            className="bg-white w-1/3 h-fit rounded-md"
            label="Month"
            select
            onChange={(e) => {
              setmonth(e.target.value);
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {YearTextField()}
        </div>
        <div className="font-serif">
          <button
            className="bg-yellow-300 rounded text-black px-4 py-2 flex justify-around"
            onClick={generatePDF}
          >
            <p>Generate Pay Slip</p>
            <ContactlessIcon></ContactlessIcon>
          </button>
          <Backdrop
              sx={{
                color: "rgb(255,0,0)",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={open}
            >
              <CircularProgress color="primary" />
            </Backdrop>
        </div>
      </div>
      {openAlert ? (
        <Alert
          variant="filled"
          severity={type}
          sx={{
            top: "13%",
            right: "1%",
            width: "auto",
            position: "absolute",
            fontSize: "18px",
            zIndex: 100,
          }}
          onClose={() => {
            setOpenAlert(false);
          }}
        >
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}
