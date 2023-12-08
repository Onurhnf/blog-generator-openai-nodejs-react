import GoBackButton from "../components/UI/GoBackButton.jsx";

function PageNotFound() {
  return (
    <main className="  flex h-screen items-center justify-center bg-gray-100 p-20">
      <div className="relative shrink grow-0 basis-[96rem] rounded-md border border-gray-200 bg-gray-50 p-20 text-center">
        <p className="mb-12 text-3xl font-bold">
          <span className="font-extrabold">404</span> Page not Found
        </p>
        <GoBackButton />
      </div>
    </main>
  );
}

export default PageNotFound;
