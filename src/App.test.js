import { render, screen } from "@testing-library/react"
import TestComponent from "./Component/TestComponent"

  
  describe("Async the Events",()=>{
    test("renter the Event details",async()=>{
      render(<TestComponent/>);

      const listElement=await screen.findAllByRole('listitem');
      console.log(listElement);
      expect(listElement).not.toHaveLength(0)
    })
  })
      
       