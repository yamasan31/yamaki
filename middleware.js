import { NextResponse } from "next/server"
import { jwtVerify } from "jose" 

export async function middleware(request){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Ind1bXlAZ21haWwuY29tIiwiZXhwIjoxNzQ0NTM4MDIxfQ.sqzAN6HzieY4w2t2_XYyGegXIPD29Z4_d9xLR5eVHJo"
    
    //await request.headers.get("Authorization")?.split(" ")[1]

    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-app-book") 
        const decodedJwt = await jwtVerify(token, secretKey) 
        // console.log("decodedJwt:", decodedJwt)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}

export const config = {                                                                               
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}