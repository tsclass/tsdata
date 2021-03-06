"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./tsdata.plugins");
exports.createDatabaseConnection = function (Database) {
    if (Database.type == "mongodb") {
        plugins.mongodb.MongoClient.connect(Database.host, function (err, db) {
            if (typeof err === "undfined") {
                plugins.beautylog.log("Connected correctly to server");
            }
            else {
                plugins.beautylog.warn("Could not connect to mongodb");
            }
            db.close();
        });
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzZGF0YS5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQVksT0FBTyxXQUFNLGtCQUN6QixDQUFDLENBRDBDO0FBR2hDLGdDQUF3QixHQUFHLFVBQVMsUUFBeUI7SUFDcEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVMsR0FBRyxFQUFFLEVBQUU7WUFDL0QsRUFBRSxDQUFBLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUEsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQ0QsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InRzZGF0YS5kYXRhYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vdHNkYXRhLnBsdWdpbnNcIlxuaW1wb3J0ICogYXMgY2xhc3NlcyBmcm9tIFwiLi90c2RhdGEuY2xhc3Nlc1wiXG5cbmV4cG9ydCBsZXQgY3JlYXRlRGF0YWJhc2VDb25uZWN0aW9uID0gZnVuY3Rpb24oRGF0YWJhc2U6Y2xhc3Nlcy5EYXRhYmFzZSl7XG4gICAgaWYgKERhdGFiYXNlLnR5cGUgPT0gXCJtb25nb2RiXCIpe1xuICAgICAgICBwbHVnaW5zLm1vbmdvZGIuTW9uZ29DbGllbnQuY29ubmVjdChEYXRhYmFzZS5ob3N0LCBmdW5jdGlvbihlcnIsIGRiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YgZXJyID09PSBcInVuZGZpbmVkXCIpe1xuICAgICAgICAgICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmxvZyhcIkNvbm5lY3RlZCBjb3JyZWN0bHkgdG8gc2VydmVyXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy53YXJuKFwiQ291bGQgbm90IGNvbm5lY3QgdG8gbW9uZ29kYlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Il19
