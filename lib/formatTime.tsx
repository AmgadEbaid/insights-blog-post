import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export function FormatTime(Time:Date){
    TimeAgo.addDefaultLocale(en)

    const timeAgo = new TimeAgo('en-US')
    
    return timeAgo.format(Time)
}


export function toReadableDate(date?: string) {
    const _date = new Date(date || Date.now());
    return _date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }