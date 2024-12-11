def add_time(start, duration, day_of_week=None):

    start_parts = start.split()
    time_parts = start_parts[0].split(':')
    start_hour = int(time_parts[0])
    start_minute = int(time_parts[1])
    period = start_parts[1]

    duration_parts = duration.split(':')
    duration_hour = int(duration_parts[0])
    duration_minute = int(duration_parts[1])


    end_minute = start_minute + duration_minute
    extra_hour = end_minute // 60
    end_minute = end_minute % 60

    end_hour = start_hour + duration_hour + extra_hour
    extra_day = 0

    while end_hour >= 12:
        if period == "AM":
            period = "PM"
        else:
            period = "AM"
            extra_day += 1
        end_hour -= 12
    
    if end_hour == 0:
        end_hour = 12
    
    days_later = extra_day

    if day_of_week:
        days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        start_day_index = days_of_week.index(day_of_week.capitalize())
        end_day_index = (start_day_index + days_later) % 7
        end_day_of_week = days_of_week[end_day_index]

    new_time = f"{end_hour}:{end_minute:02d} {period}"
    
    if day_of_week:
        new_time += f", {end_day_of_week}"
    
    if days_later == 1:
        new_time += " (next day)"
    elif days_later > 1:
        new_time += f" ({days_later} days later)"
    
    return new_time



print(add_time("3:00 PM", "3:10"))
print(add_time("11:30 AM", "2:32", "Monday"))
print(add_time("11:43 AM", "00:20"))
print(add_time("10:10 PM", "3:30"))
print(add_time("11:43 PM", "24:20", "tueSday"))
print(add_time("6:30 PM", "205:12"))