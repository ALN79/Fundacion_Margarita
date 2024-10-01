import React from "react";

export function BannerName({username}) {
  return (
    <div className="w-full bg-yellow-400 py-4">
      <h1 className="text-white text-5xl text-center">¡Bienvenido {username}!</h1>
    </div>
  );
}
