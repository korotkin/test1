f = open("input.txt", "r")
out = open("output.txt", "w")

def calc(row):
    acc = 0
    print(row)
    arr = row.split(',')
    for i in arr:
        acc += int(i)
    return acc

while True:
    res = 0
    try:
        r1 = f.readline()
        if not r1:
            break
        res = calc(r1)

        r2 = f.readline()
        if not r2:
            out.write(f"{str(res)}\n")
            break
        res += calc(r2)
        out.write(f"{str(res)}\n")
        res = 0

    except Exception as err:
        print(err)
        break

out.close()
