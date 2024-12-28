import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        
        const response1 = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/company-logos`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
        });

            const response2 = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/homes`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
        });

            const response3 = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
            });
        
         const response4 = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/why-choose-uses`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
         });
        
        let data = {
                companyLogos: response1.data,
                homes: response2?.data?.data[0],
                products: response3.data,
                whyChooseUses: response4.data,
            };

        
        if (data.companyLogos && data.homes && data.products && data.whyChooseUses) {
              return NextResponse.json(data, { status: 200 });;
        }
      
        


        
        
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
  
}