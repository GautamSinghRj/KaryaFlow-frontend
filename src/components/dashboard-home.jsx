import {SectionCards} from "@/components/section-cards.jsx";
import {ChartAreaInteractive} from "@/components/chart-area-interactive.jsx";
import {DataTable} from "@/components/data-table.jsx";
import data from "@/app/dashboard/data.json";

export default function DashboardHome(){
    return(
        <>
            <SectionCards />
            <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
        </>
    )
}