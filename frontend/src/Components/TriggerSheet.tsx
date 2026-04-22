import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import { PriceTriggerMetadata } from "../nodes/triggers/PriceTrigger";
import { TimerNodeMetadata } from "../nodes/triggers/Timer";

// const Selectitem = [{ id: "price-trigger", title: "Price", description: "Select this to trigger whenever price goes higher or lower at certain level" },
// { id: "time-trigger", title: "Timer", description: "Select this to trigger the every every x seconds" }
// ]

const SUPPORTED_TRIGGERS = [
   {
     id: "price-trigger",
     title: "Price Trigger",
     description: "Select this to trigger whenever price goes higher or lower at certain level"
   },
   {
     id: "time-trigger",
     title: "Timer",
     description: "Select this to trigger every x seconds"
     
   }
]

export default function TriggerSheet({ onSelect }: { onSelect: (trigger: string, metadata: any) => void }) {

    const [selectedTrigger, setSelectedTrigger] = useState<string>(SUPPORTED_TRIGGERS[0].id)
    const [metadata, setmetadata] = useState<PriceTriggerMetadata | TimerNodeMetadata>({time:3600});
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Select trigger</SheetTitle>
                    <SheetDescription>
                        Select the trigger that you want
                        {selectedTrigger}
                        <Select value={selectedTrigger} onValueChange={(value)=>{setSelectedTrigger(value)}}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Trigger" />
                          </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectGroup>
                              {SUPPORTED_TRIGGERS.map(({ id, title }) => (
                                  <SelectItem key={id} value={id}>
                                     {title}
                                 </SelectItem>
                               ))}
                             </SelectGroup>
                          </SelectContent>
                        </Select>

                       {selectedTrigger === "price-trigger" && <div>

                              <Select value={metadata.assets} onValueChange={(value)=>setmetadata(metadata => ({...metadata,assets:value}))}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Trigger" />
                          </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectGroup>
                              {SUPPORTED_TRIGGERS.map(({ id, title }) => (
                                  <SelectItem key={id} value={id}>
                                     {title}
                                 </SelectItem>
                               ))}
                             </SelectGroup>
                          </SelectContent>
                        </Select>
                        </div>}
                       
                       {selectedTrigger === "time-trigger" && <div>

                              <Select value={selectedTrigger} onValueChange={(value)=>{setSelectedTrigger(value)}}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Trigger" />
                          </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectGroup>
                              {SUPPORTED_TRIGGERS.map(({ id, title }) => (
                                  <SelectItem key={id} value={id}>
                                     {title}
                                 </SelectItem>
                               ))}
                             </SelectGroup>
                          </SelectContent>
                        </Select>
                        </div>}

                    </SheetDescription>
                </SheetHeader>

                <SheetFooter>
                    <Button type="submit" onClick={() => { onSelect(selectedTrigger, metadata) }}>Create KTrigger</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
