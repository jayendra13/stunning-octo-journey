import json

with open("rivers.json", "r") as f:
    data = json.load(f)

features = data['features']
features_ = []

x_min, x_max = [68, 85]
y_min, y_max = [19, 28]

for feature in features:
    coordinates = feature['geometry']['coordinates'][0]
    y, x = coordinates[0]
    if ((x_min<=x) and (x<=x_max)) and ((y_min<=y) and (y<=y_max)):
        features_.append(feature)

new_data = data.copy()
new_data['features'] = features_

with open('~/lab/leaflet/assets/rivers.json', 'w') as f:
    json.dump(new_data, f)