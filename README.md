# Patty Burps POS: Windows desktop app

This wraps the same POS as the web version in its own Windows window (no browser tabs, own icon, installs like normal software).
Her data is saved inside the app on that laptop. The cloud sync and the iPhone monitor work the same way.

You do not need to install anything on your own computer. GitHub builds the installer for you.

1. Make a new GitHub repository (private is fine).
2. Upload everything in this folder, including the hidden .github folder. If the upload skips it, use
   Add file > Create new file, type  .github/workflows/build.yml  as the name, and paste the file contents.
3. Open the repository's Actions tab, pick "build-windows", then Run workflow. It takes about 10 to 15 minutes.
4. When it finishes, open the run and download the artifact "PattyBurps-POS-installer" (a zip with the .exe inside).
5. Run the .exe on her laptop. Windows may warn about an unknown publisher because the app is not code-signed.
   Choose More info, then Run anyway. The installer needs internet once to fetch Microsoft's WebView2 if the laptop lacks it.

To update later: replace web/index.html with the newest one and run the workflow again.

Status: written from the Tauri 2 documentation and not yet compiled. If the build fails, send the error text from the Actions log.
