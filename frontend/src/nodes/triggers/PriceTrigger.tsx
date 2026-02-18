import { Handle,HandleProps, Position } from "@xyflow/react"

export type PriceTriggerMetadata = {
    assets: string,
    price: number,
}
export function PriceTrigger({data, isConnectable}: {
     data: {
        metadata: PriceTriggerMetadata
     },
     isConnectable: boolean
}) {
    return (
        <div className="p-4 border">
            {data.metadata.assets}
            {data.metadata.price}
           <Handle position= {Position.Right} type="source"></Handle>
        </div>
    )
}
