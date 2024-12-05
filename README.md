
# 0x000000E0 ACPI_BIOS_FATAL_ERROR

## Fix ACPI BIOS FATAL ERROR in Windows 11/10

The `ACPI_BIOS_FATAL_ERROR` bug check has a value of `0x000000E0`. This indicates that one of your computer components is faulty. To identify and resolve the issue:

1. Run **Memory Diagnostic Tool**.
2. Run **Automatic Startup Repair**.

### Enabling ACPI in Windows

You can enable ACPI mode from the BIOS. Most standard PCs have it enabled by default. If it isn’t visible in **Device Manager**, enable it from the BIOS or UEFI. When active, the OS can control hardware configuration and power management features.

---

# 0x000000E1 WORKER_THREAD_RETURNED_AT_BAD_IRQL

## Understanding the Problem

`WORKER_THREAD_RETURNED_AT_BAD_IRQL` is a Windows stop code (BSOD) error caused by a worker thread returning at an incorrect Interrupt Request Level (IRQL). This can destabilize the system, causing crashes and BSOD.

### Causes
- **Outdated or incompatible drivers**
- **Faulty hardware** (e.g., RAM, hard drives)
- **Software conflicts** (incompatible applications or drivers)
- **Malware infections**

## Fixes

1. **Run DISM and SFC Scans**
   ```bash
   dism /online /cleanup-image
   sfc /scannow
   ```
   Restart your computer after completion.

2. **Uninstall Faulty Software**
   - Open **Settings > Apps**.
   - Locate the app causing the issue, select it, and uninstall.

3. **Scan for Malware**
   - Download and install **Malwarebytes**.
   - Run a full scan to remove malware.

4. **Check for Updates**
   - Open **Settings > Windows Update** and check for OS and driver updates.

5. **Disable Unnecessary Startup Programs**
   - Open **Task Manager > Startup Tab** and disable non-essential programs.

6. **Run a Memory Test**
   - Use the **Windows Memory Diagnostic Tool** (`mdsched.exe`).

7. **Inspect Hardware**
   - Open **Device Manager** (`devmgmt.msc`) and check for hardware errors.

8. **Perform a System Restore**
   - Use a saved restore point to revert the system to a previous state.

9. **Reset Your PC**
   - Navigate to **Settings > System > Recovery > Reset PC**.

---

# 0x000000E2 MANUALLY_INITIATED_CRASH

This error indicates a deliberate crash initiated from the kernel debugger or keyboard.

## Forcing a BSOD (Blue Screen of Death)

1. Open the Registry Editor (`regedit`).
2. Navigate to:
   - **USB Keyboard:** `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\kbdhid\Parameters`
   - **PS/2 Keyboard:** `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\i8042prt\Parameters`
3. Create a `DWORD (32-bit)` named `CrashOnCtrlScroll` and set its value to `1`.
4. Restart the system.
5. To trigger a BSOD, hold the **Ctrl** key and press the **Scroll Lock** key twice.

To revert:
- Delete the `CrashOnCtrlScroll` entry from the registry.

---

# 0x000000E3 RESOURCE_NOT_OWNED

## Understanding RESOURCE_NOT_OWNED

This error occurs when a process attempts to access a resource currently locked by another process. 

### Causes
- **File Locking:** Another process is using the file.
- **Network Sharing:** Resource accessed by another user.
- **Permission Conflicts:** Insufficient access rights.
- **Software Bugs:** Faulty programming or component conflicts.

---

# 0x000000E4 WORKER_INVALID

## Understanding WORKER_INVALID

`0x000000E4` with a BSOD indicates a driver freed memory still containing an executive worker item, commonly caused by `avgidsdrivera.sys` from AVG Antivirus.

## Fix

1. **Remove AVG Antivirus:**
   - Open **Settings > Apps**.
   - Select **AVG** and click **Uninstall**.
   - Reboot the system.

2. **Use Alternative Antivirus:**
   - Opt for **Windows Defender** or other reliable antivirus software.
```


