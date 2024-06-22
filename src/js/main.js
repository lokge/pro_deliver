$(function() {

    // Addresses data
    let addressData = [];

    function updateAddresses() {
        $('.main-address-list').empty();

        if (addressData.length > 0) {
            addressData.forEach(item => {
                let newAddressItem = `
                    <li class="main-address-item">
                        <span>
                            <p class="main-address-search-item">${item.address}</p>
                            <p class="main-address-arrival-time">Примерное время прибытия: <span class="main-address-arrival-count"></span></p>
                        </span>
                        <span class="address-icon-box">
                            <button class="main-address-delete" data-address="${item.address}"><i class="bi bi-dash-circle"></i></button>
                            <i class="bi bi-caret-right-square"></i>
                        </span>
                    </li>
                `;
        
                $('.main-address-list').append(newAddressItem);
            });
        } else {
            $('.main-address-list').append('<h3 class="main-address-empty">Адреса не добавлены</h3>')
        };

        $('.main-address-delete').off("click").on("click", function() {
            let addressToDelete = $(this).data("address");
            addressData.forEach((item, index) => {
                if (item.address == $(this).data("address")) {
                    console.log("Найден адрес: " + item.address, index);
                    addressData.splice(index, 1);
                };
            });
            updateAddresses();
        });
        
    };

    $('.main-form-input').on("change", function() {
        addressData.push({address: $(this).val()});
        $(this).val('')
        updateAddresses();
    });

    updateAddresses();
});