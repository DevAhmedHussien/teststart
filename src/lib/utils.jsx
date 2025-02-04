import axios from "axios";
import { format, parse } from "date-fns";

// it should be in .env in real project 
const API_BASE_URL = "http://localhost:3001";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

  // ** Safely Convert Arrays to Strings for Search
  export const safeString = (value) => {
    if (!value) return "";
    return Array.isArray(value) ? value.join(", ").toLowerCase() : String(value).toLowerCase();
  };


  // ** Format Date for Search
  export const formatDate = (date) => {
    if (!date) return "";
    try {
      return format(parse(safeString(date), "yyyy-MM-dd", new Date()), "MM/dd/yyyy");
    } catch (error) {
      return date;
    }
  };

  // ** Format Time for Search
  export const formatTime = (time) => {
    if (!time) return "";
    try {
      return format(parse(safeString(time), "HH:mm", new Date()), "hh:mm a");
    } catch (error) {
      return time;
    }
  };