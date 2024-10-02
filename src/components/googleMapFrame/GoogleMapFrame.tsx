
export function GoogleMapFrame() {
    return (
        <iframe
            title="Google Map showing our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.112728567579!2d30.736870688162714!3d46.4860802253535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631bd65e172a9%3A0x22d39a1e5725cd8e!2z0YPQuy4g0JXQutCw0YLQtdGA0LjQvdC40L3RgdC60LDRjywgOCwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjUwMDA!5e0!3m2!1sru!2suk!4v1720532290145!5m2!1sru!2suk"
            style={{border: 0}}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl w-full md:w-1/2 h-96 md:h-[500px]"
        ></iframe>
    );
}