import { Metadata } from "next";
import OpenSourceClient from "./OpenSourceClient";

export const metadata: Metadata = {
  title: "Open Source | Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

export default function OpenSourcePage() {
  return <OpenSourceClient />;
}