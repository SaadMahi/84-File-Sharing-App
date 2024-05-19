const Spinner = () => {
  return (
    <div class="absolute inset-0 flex h-screen items-center justify-center gap-2 border backdrop-blur-sm">
      <div class="h-5 w-5 animate-pulse rounded-full bg-primary"></div>
      <div class="h-5 w-5 animate-pulse rounded-full bg-primary"></div>
      <div class="h-5 w-5 animate-pulse rounded-full bg-primary"></div>
    </div>
  );
};

export default Spinner;
