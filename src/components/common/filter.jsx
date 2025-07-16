import { Fragment, useState } from "react";
import { filterOptions } from "@/config";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react"; // filter icon

function ProductFilter({ filters, handleFilter }) {
  const [open, setOpen] = useState(false);

  const renderFilters = () => (
    <div className="space-y-6">
      {Object.keys(filterOptions).map((keyItem) => (
        <Fragment key={keyItem}>
          <div>
            <h3 className="text-base font-semibold text-gray-300 capitalize">
              {keyItem}
            </h3>
            <div className="grid gap-2 mt-3">
              {filterOptions[keyItem].map((option) => (
                <Label
                  key={option.id}
                  className="flex items-center gap-2 text-sm text-white hover:text-red-400 transition"
                >
                  <Checkbox
                    checked={
                      filters &&
                      Object.keys(filters).length > 0 &&
                      filters[keyItem] &&
                      filters[keyItem].indexOf(option.id) > -1
                    }
                    onCheckedChange={() => {
                      handleFilter(keyItem, option.id);
                      if (window.innerWidth < 1024) {
                        setOpen(false); // Auto-close sheet on mobile
                      }
                    }}
                    className="border-gray-600 bg-black data-[state=checked]:bg-red-600"
                  />
                  {option.label}
                </Label>
              ))}
            </div>
          </div>
          <Separator className="bg-gray-700" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile filter trigger */}
      <div className="lg:hidden mb-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-white border-gray-600 bg-[#111] hover:bg-[#222] gap-2"
            >
              <SlidersHorizontal size={18} />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[#1a1a1a] text-white border-r border-gray-700"
          >
            <SheetHeader>
              <SheetTitle className="text-red-500">Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">{renderFilters()}</div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block bg-[#1a1a1a] rounded-lg shadow-sm border border-gray-700 text-white p-4">
        <h2 className="text-lg font-extrabold text-red-500 mb-4">Filters</h2>
        {renderFilters()}
      </div>
    </>
  );
}

export default ProductFilter;
