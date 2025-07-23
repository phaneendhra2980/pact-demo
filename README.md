# Pact Contract Testing Demo

## How to Run

### 1. Install dependencies

```
cd consumer && npm install
cd ../provider && npm install
```

### 2. Run Consumer Tests and Publish Contracts

```
cd consumer
npm test
cd ..
./scripts/publish-contract.sh
```

### 3. Start Provider and Run Verification

```
cd provider
npm run start &
cd ..
./scripts/verify-provider.sh
```

### 4. PactFlow

Check the contracts and verifications at your [PactFlow Dashboard](https://your-org.pactflow.io).

## Notes

- Break the provider response to simulate contract failure.
- Add CI/CD later for full automation.