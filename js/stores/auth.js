/**
 * Created by andrynegystorov on 7/27/17.
 */

import { AsyncStorage } from 'react-native';
import { observable, action } from 'mobx';
import { create, persist } from 'mobx-persist';

class AuthStore {
    @observable isHydrated = false
	@persist @observable email = ''
    @persist @observable uid = null

    @action setUid(uid) {
		this.uid = uid;
    }
    @action setEmail(email) {
		this.email = email;
    }
    @action setHydrated(value) {
        this.isHydrated = value;
    }
    @action setValue(params) {
        Object.assign(this, params);
    }
}

const hydrate = create({
    storage: AsyncStorage
});

const authStore = new AuthStore();

export default authStore;


hydrate('auth', authStore)
    .then(() => {
        authStore.setHydrated(true);
    });