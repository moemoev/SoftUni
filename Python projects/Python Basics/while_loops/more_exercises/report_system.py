required_money = int(input())  # TODO , is working. but code looks like shit!
total_sum = 0
count_transaction = 0
count_cs_transactions = 0
count_cc_transactions = 0
average_cs = 0
average_cc = 0

while total_sum < required_money:
    count_transaction += 1
    payment = input()
    if payment == 'End':
        break
    elif (count_transaction % 2) == 1:
        if int(payment) > 100:
            print("Error in transaction!")
            continue
        print("Product sold!")
        average_cs += int(payment)
        count_cs_transactions += 1
    else:
        if int(payment) < 10:
            print("Error in transaction!")
            continue
        print("Product sold!")
        average_cc += int(payment)
        count_cc_transactions += 1
    total_sum = average_cc + average_cs

if average_cc == 0:
    count_cc_transactions = 1
if average_cs == 0:
    count_cs_transactions = 1
if total_sum >= required_money:
    print(
        f"Average CS: {average_cs / count_cs_transactions:.2f}\nAverage CC: {average_cc / count_cc_transactions:.2f}")
else:
    print(f"Failed to collect required money for charity.")

