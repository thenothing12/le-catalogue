"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<
    null | number
    >(null)

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if(e.key === "Escape") {
          setActiveIndex(null)
        }
      }

      document.addEventListener("keydown", (e) => handler)

      return() => {
        document.removeEventListener("keydown", handler)
      }
    }, [])

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

  return(
    <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const isOpen = i === activeIndex

        return(
            <NavItem 
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen} close={function (): void {
              throw new Error("Function not implemented.")
            } }/>
        )
        })}
    </div>
  )
}

export default NavItems