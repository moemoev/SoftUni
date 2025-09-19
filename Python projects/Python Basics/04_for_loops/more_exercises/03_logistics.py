total_transports = int(input())
tons_microbus = 0
tons_tir = 0
tons_train = 0
total_tons = 0
total_cost = 0

for transport in range(total_transports):
    tons_per_transport = int(input())
    total_tons += tons_per_transport
    if tons_per_transport <= 3:
        tons_microbus += tons_per_transport
        total_cost += tons_per_transport * 200
    elif tons_per_transport <= 11:
        tons_tir += tons_per_transport
        total_cost += tons_per_transport * 175
    else:
        tons_train += tons_per_transport
        total_cost += tons_per_transport * 120

print(f"{(total_cost / total_tons):.2f}")
print(f"{(tons_microbus / total_tons * 100):.2f}%")
print(f"{(tons_tir / total_tons * 100):.2f}%")
print(f"{(tons_train / total_tons * 100):.2f}%")
