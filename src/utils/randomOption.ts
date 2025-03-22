export const randomizeQuizOptions = (options: string[]): string[] => {
    let index = options.length;
    let randomIndex = 0;
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
      // And swap it with the current element.
      [options[index], options[randomIndex]] = [options[randomIndex], options[index]];
    }
    return options;
  }