import { Badge } from "@/components/ui"

function AssetCard({ type, name }: { type: string; name: string }) {
    return (
        <div className="flex items-center gap-1 rounded-sm bg-card p-1 pr-2">
            <Badge variant="outline" className="rounded-sm text-[10px] text-neutral-400">
                {type}
            </Badge>
            <span className="text-xs text-neutral-400">
                {name}.{type.toLowerCase()}
            </span>
        </div>
    )
}

export default AssetCard
