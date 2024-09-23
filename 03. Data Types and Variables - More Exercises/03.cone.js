function cone(r, h) {
  let volume = (1 / 3) * Math.PI * r * r * h;
  console.log(`volume = ${volume.toFixed(4)}`);

  let totalSurfaceArea =
    Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));
  console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

cone(3, 5);
