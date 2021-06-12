import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}
createPolicy(policy: Policy){
  return this.firestore.collection('policies').add(policy);
}
updatePolicy(policy: Policy){
  delete policy.id;
  this.firestore.doc('policies/' + policy.id).update(policy);
}
deletePolicy(policyId: string){
  this.firestore.doc('policies/' + policyId).delete();
}
  constructor(private firestore: AngularFirestore) { }
}
