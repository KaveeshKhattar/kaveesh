import { Metadata } from "next";
import HackathonsClient from "./HackathonClient";

export const metadata: Metadata = {
  title: "Hackathons | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

export default function HackathonsPage() {
  return <HackathonsClient />;
}