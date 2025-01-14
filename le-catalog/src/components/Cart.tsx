"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"


const Cart = () => {

    const intoTheLmao = 0
    const fee = 1

  return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart 
                aria-hidden="true" 
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" 
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
            </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>Daftar Belanja (0)</SheetTitle>
            </SheetHeader>
            {intoTheLmao > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6">
                        {/* todo: logika belanjaan */}
                        Item belanja
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-y-1.5 pr-6">
                            <div className="flex">
                                <span className="flex-1">Ongkos kirim dikenakan</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Ppn</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Harga total</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({
                                    className: "w-full",
                                })}>
                                    Checkout barang
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (
            <div  className="flex h-full flex-col items-center justify-center space-y-1">
                <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                    <Image 
                        src='https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png'
                        fill
                        alt="kosong melompong layaknya gaji"
                    />
                </div>
                <div className="text-xl font-semibold">Belanjaan sepertinya kosong nih :| </div>
                <SheetTrigger asChild>
                    <Link href='/products' className={buttonVariants({
                        variant: "link",
                        size: "sm",
                        className: "text-sm text-muted-foreground"
                    })}>
                        Tambahkan item ke dalam cart anda untuk proses checkout :)
                    </Link>
                </SheetTrigger>
            </div>
            )}
        </SheetContent>
    </Sheet>
  )
}

export default Cart