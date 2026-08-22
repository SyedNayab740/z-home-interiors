import { Loader } from "@/components/ui/Loader";

export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <Loader />
    </div>
  );
}
