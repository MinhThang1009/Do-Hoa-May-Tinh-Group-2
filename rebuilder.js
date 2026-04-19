const { execSync } = require('child_process');

try {
    console.log('Resetting to base commit...');
    execSync('git rebase --abort', { stdio: 'ignore' });
} catch (e) { }

try {
    execSync('git reset --hard 5d5cc46', { stdio: 'inherit' });

    console.log('Cherry-picking commit 1: c5147c9');
    execSync('git cherry-pick c5147c9', { stdio: 'inherit' });
    execSync('git commit --amend -m "Thêm hộp thông tin chú giải tương tác cho Ion"', { stdio: 'inherit' });

    console.log('Cherry-picking commit 2: 99def4a');
    execSync('git cherry-pick 99def4a', { stdio: 'inherit' });
    execSync('git commit --amend -m "Sửa lỗi trạng thái hiển thị của nhãn phân tử Ion"', { stdio: 'inherit' });

    console.log('Cherry-picking commit 3: 09df22b');
    execSync('git cherry-pick 09df22b', { stdio: 'inherit' });
    execSync('git commit --amend -m "Mở rộng toàn diện cấu trúc giao diện UI và Engine 3D"', { stdio: 'inherit' });

    console.log('Cherry-picking commit 4: 60aa239');
    execSync('git cherry-pick 60aa239', { stdio: 'inherit' });
    execSync('git commit --amend -m "Đồng bộ vi mô UI, hoàn thiện đồ họa 3D và vá lỗi hiển thị"', { stdio: 'inherit' });

    console.log('Cherry-picking commit 5: 74b06dd');
    execSync('git cherry-pick 74b06dd', { stdio: 'inherit' });
    execSync('git commit --amend -m "Viết lại tài liệu README.md theo chuẩn kỹ thuật chuyên nghiệp"', { stdio: 'inherit' });

    console.log('Completed successfully!');
} catch (error) {
    console.error('Failed!', error.message);
}
