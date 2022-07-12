function recursiva(max) {
   console.log(max);

   if (max >= 12) return;
   max++;

   recursiva(max);
}

recursiva(0);