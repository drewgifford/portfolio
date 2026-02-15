import { DateTime } from "luxon";

export function getAge() {

  // this is a real lazy way of doing "i dont want to update my portfolio every year" lol
  const birthday = DateTime.fromObject({
    year: 2001,
    month: 12,
    day: 20,
  },
  {
    zone: 'America/New_York'
  });

  const now = DateTime.now().setZone('America/New_York');
  const age = Math.floor(now.diff(birthday, "years").years);
  return age;
}