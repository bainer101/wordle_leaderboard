import RealData from "./RealData";
import TestData from "./TestData";

const IS_LOCAL = true;
const realData = new RealData();
const testData = new TestData();

class DataSource {
    initPlayers() {
        return IS_LOCAL ? testData.initPlayers() : realData.initPlayers();
    }

    login(username: string, pin: string) {
        return IS_LOCAL ? testData.login(username, pin) : realData.login(username, pin);
    }
}

export default DataSource;